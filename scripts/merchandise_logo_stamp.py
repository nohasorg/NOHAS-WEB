from io import BytesIO
from pathlib import Path
from urllib.request import urlopen

from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "assets" / "merchandise"
LOGO_PATH = ROOT / "assets" / "nohas-logo-transparent.png"

PRODUCTS = {
    "field-t-shirt.png": {
        "url": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90",
        "size": (240, 240),
        "scale": 0.62,
        "placement": (0.5, 0.35),
        "badge": (210, 210),
        "radius": 54,
    },
    "nohas-mug.png": {
        "url": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=90",
        "size": (220, 220),
        "scale": 0.75,
        "placement": (0.5, 0.55),
        "badge": (185, 185),
        "radius": 46,
    },
    "branded-keychain.png": {
        "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=90",
        "size": (240, 240),
        "scale": 0.68,
        "placement": (0.45, 0.47),
        "badge": (190, 190),
        "radius": 42,
    },
}


def build_brand_mark(product_config, logo):
    width, height = product_config["badge"]
    badge = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(badge)
    draw.rounded_rectangle(
        (0, 0, width, height),
        radius=product_config["radius"],
        fill=(245, 242, 232, 200),
        outline=(47, 94, 58, 180),
        width=4,
    )

    logo_variant = logo.copy()
    target_w = int(product_config["size"][0] * product_config["scale"])
    target_h = int(product_config["size"][1] * product_config["scale"])
    logo_variant.thumbnail((target_w, target_h), Image.Resampling.LANCZOS)

    x = (width - logo_variant.width) // 2
    y = (height - logo_variant.height) // 2
    badge.alpha_composite(logo_variant, (x, y))
    return badge


def process_product(filename, config):
    with urlopen(config["url"], timeout=30) as response:
        image = Image.open(BytesIO(response.read())).convert("RGB")

    image = ImageOps.fit(
        image,
        (1200, 1200),
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.5),
    ).convert("RGBA")

    logo = Image.open(LOGO_PATH).convert("RGBA")
    badge = build_brand_mark(config, logo)

    badge_w, badge_h = config["badge"]
    x = int((image.width - badge_w) * config["placement"][0])
    y = int((image.height - badge_h) * config["placement"][1])
    x = max(0, min(image.width - badge_w, x))
    y = max(0, min(image.height - badge_h, y))

    image.alpha_composite(badge, (x, y))
    rgb = image.convert("RGB")
    rgb.save(OUTPUT_DIR / filename, quality=92, optimize=True)
    print(f"created {OUTPUT_DIR / filename}")


OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
for filename, config in PRODUCTS.items():
    process_product(filename, config)
