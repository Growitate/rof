import os
from PIL import Image

SOURCE_MOCKUP = r"C:\Users\Varada\.gemini\antigravity\brain\889f9ef6-b182-4d00-a047-1786222dd1ff\layout_mockup.jpg"
SOURCE_HERO = r"C:\Users\Varada\.gemini\antigravity\brain\889f9ef6-b182-4d00-a047-1786222dd1ff\hero_bg.jpg"
PUBLIC_ASSETS = r"c:\Users\Varada\Desktop\rof\public\assets"

os.makedirs(PUBLIC_ASSETS, exist_ok=True)

# Copy full hero background
hero_img = Image.open(SOURCE_HERO)
hero_img.save(os.path.join(PUBLIC_ASSETS, "hero_bg.jpg"), quality=95)
print("Saved hero_bg.jpg")

mockup = Image.open(SOURCE_MOCKUP)
w, h = mockup.size
print(f"Mockup size: {w}x{h}")

# Bounding boxes (left, top, right, bottom)
crops = {
    "logo.png": (10, 5, 115, 42),
    "product_tub_60.png": (84, 458, 185, 602),
    "product_tub_30.png": (394, 475, 486, 602),
    "flavor_orange.png": (54, 619, 134, 665),
    "flavor_blueberry.png": (140, 619, 218, 665),
    "flavor_fruit_punch.png": (224, 619, 305, 665),
    "why_real_ingredients.png": (40, 718, 170, 799),
    "why_proper_knowledge.png": (200, 718, 320, 799),
    "why_max_performance.png": (346, 718, 470, 799),
    "why_shaker.png": (500, 714, 600, 799),
    "peeking_wolf.png": (276, 882, 406, 952),
    "real_over_fake_stamp.png": (530, 950, 630, 995)
}

for name, box in crops.items():
    cropped = mockup.crop(box)
    cropped.save(os.path.join(PUBLIC_ASSETS, name))
    print(f"Extracted {name}")

print("Asset extraction complete.")
