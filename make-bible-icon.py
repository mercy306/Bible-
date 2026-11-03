import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_bible_icon(size=512):
    # Full bleed rich obsidian background matching phone home screen aesthetic
    img = Image.new('RGBA', (size, size), (13, 15, 20, 255))
    draw = ImageDraw.Draw(img)

    # Ambient warm glow centered on the Bible
    cx, cy = size // 2, size // 2
    for r in range(int(size * 0.7), 0, -10):
        factor = (1 - (r / (size * 0.7))) ** 2.0
        gold_alpha = int(45 * factor)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(212, 175, 55, gold_alpha))

    # Dimensions for the 3D Bible Book
    # Perfectly sized for Android maskable and Apple icons
    bw = int(size * 0.70)  # ~358 px
    bh = int(size * 0.82)  # ~420 px
    bx = (size - bw) // 2 + 8
    by = (size - bh) // 2 - 4

    # Drop shadow under the book
    shadow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle(
        [bx - 4, by + 10, bx + bw + 14, by + bh + 16],
        radius=24,
        fill=(0, 0, 0, 200)
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    img.alpha_composite(shadow)

    # 1. Gilded Pages (Right and Bottom edges of the book)
    page_color = (228, 218, 196, 255)       # warm cream parchment
    page_edge_gold = (212, 175, 55, 255)    # gilded gold foil edge
    
    # Right page block
    draw.rounded_rectangle(
        [bx + bw - 18, by + 12, bx + bw + 12, by + bh - 6],
        radius=10,
        fill=page_color
    )
    # Texture stripes on page edge
    for py in range(by + 16, by + bh - 10, 3):
        draw.line([bx + bw - 14, py, bx + bw + 10, py], fill=(190, 160, 110, 180), width=1)

    # Bottom page block
    draw.rounded_rectangle(
        [bx + 16, by + bh - 18, bx + bw + 8, by + bh + 8],
        radius=10,
        fill=page_color
    )
    for px in range(bx + 20, bx + bw + 4, 3):
        draw.line([px, by + bh - 14, px, by + bh + 6], fill=(190, 160, 110, 180), width=1)

    # Red silk bookmark ribbon extending out of the bottom pages
    rw = 20
    rx = bx + bw // 2 - 8
    ry_start = by + bh - 14
    ry_end = by + bh + 30
    draw.polygon([
        (rx, ry_start),
        (rx + rw, ry_start),
        (rx + rw, ry_end),
        (rx + rw // 2, ry_end - 8),
        (rx, ry_end)
    ], fill=(175, 28, 28, 255))
    # Ribbon highlight
    draw.line([rx + 4, ry_start, rx + 4, ry_end - 5], fill=(220, 60, 60, 180), width=2)

    # 2. Main Leather Cover (Dark Obsidian luxury leather)
    cover_x1 = bx
    cover_y1 = by
    cover_x2 = bx + bw - 6
    cover_y2 = by + bh - 6
    
    # Deep gradient leather fill
    draw.rounded_rectangle(
        [cover_x1, cover_y1, cover_x2, cover_y2],
        radius=22,
        fill=(18, 21, 28, 255)
    )

    # Inner leather shading
    draw.rounded_rectangle(
        [cover_x1 + 3, cover_y1 + 3, cover_x2 - 3, cover_y2 - 3],
        radius=20,
        fill=(13, 16, 21, 255)
    )

    # Spine ridge on the left
    spine_w = 26
    draw.rounded_rectangle(
        [cover_x1, cover_y1, cover_x1 + spine_w, cover_y2],
        radius=20,
        fill=(10, 12, 16, 255)
    )
    # Gold embossed spine lines
    draw.line([cover_x1 + spine_w, cover_y1 + 10, cover_x1 + spine_w, cover_y2 - 10], fill=(212, 175, 55, 90), width=2)
    for ry in [cover_y1 + 60, cover_y1 + 140, cover_y2 - 140, cover_y2 - 60]:
        draw.line([cover_x1 + 4, ry, cover_x1 + spine_w - 4, ry], fill=(212, 175, 55, 140), width=2)

    # 3. Ornate Gold Filigree Framing on Front Cover
    fx1 = cover_x1 + spine_w + 14
    fy1 = cover_y1 + 18
    fx2 = cover_x2 - 16
    fy2 = cover_y2 - 18
    
    # Outer gold border
    draw.rounded_rectangle([fx1, fy1, fx2, fy2], radius=12, outline=(212, 175, 55, 230), width=2)
    # Inner subtle hairline border
    draw.rounded_rectangle([fx1 + 5, fy1 + 5, fx2 - 5, fy2 - 5], radius=8, outline=(197, 160, 89, 100), width=1)

    # Corner gold accents
    c_len = 10
    for cx_c, cy_c, dx, dy in [
        (fx1 + 5, fy1 + 5, 1, 1),
        (fx2 - 5, fy1 + 5, -1, 1),
        (fx1 + 5, fy2 - 5, 1, -1),
        (fx2 - 5, fy2 - 5, -1, -1)
    ]:
        draw.ellipse([cx_c - 2, cy_c - 2, cx_c + 2, cy_c + 2], fill=(244, 232, 193, 255))
        draw.line([cx_c, cy_c, cx_c + dx * c_len, cy_c], fill=(212, 175, 55, 255), width=2)
        draw.line([cx_c, cy_c, cx_c, cy_c + dy * c_len], fill=(212, 175, 55, 255), width=2)

    # 4. Typography: "መጽሐፍ ቅዱስ" (Amharic Title)
    font_path = "C:/Windows/Fonts/ebrimabd.ttf"
    if os.path.exists(font_path):
        font_am = ImageFont.truetype(font_path, 28)
        font_en = ImageFont.truetype(font_path, 12)
    else:
        font_am = ImageFont.load_default()
        font_en = ImageFont.load_default()

    am_text = "መጽሐፍ ቅዱስ"
    # Get bounding box to center text on cover
    bbox = font_am.getbbox(am_text)
    tw = bbox[2] - bbox[0]
    tx = fx1 + (fx2 - fx1 - tw) // 2
    ty = fy1 + 24

    # Golden text with drop shadow
    draw.text((tx, ty + 1), am_text, font=font_am, fill=(0, 0, 0, 160))
    draw.text((tx, ty), am_text, font=font_am, fill=(244, 232, 193, 255))

    # 5. Golden Sacred Cross Emblem
    cross_cx = fx1 + (fx2 - fx1) // 2
    cross_cy = fy1 + (fy2 - fy1) // 2 + 10

    # Cross radiant halo
    halo_r = 44
    draw.ellipse(
        [cross_cx - halo_r, cross_cy - halo_r, cross_cx + halo_r, cross_cy + halo_r],
        outline=(212, 175, 55, 80),
        width=1
    )
    draw.ellipse(
        [cross_cx - halo_r + 6, cross_cy - halo_r + 6, cross_cx + halo_r - 6, cross_cy + halo_r - 6],
        fill=(212, 175, 55, 25)
    )

    # Diamond radiant star behind cross
    dia_r = 30
    draw.polygon([
        (cross_cx, cross_cy - dia_r),
        (cross_cx + dia_r, cross_cy),
        (cross_cx, cross_cy + dia_r),
        (cross_cx - dia_r, cross_cy)
    ], fill=(197, 160, 89, 50), outline=(212, 175, 55, 120))

    # Vertical beam
    v_top = cross_cy - 60
    v_bot = cross_cy + 60
    v_w = 12
    draw.rounded_rectangle(
        [cross_cx - v_w // 2, v_top, cross_cx + v_w // 2, v_bot],
        radius=4,
        fill=(212, 175, 55, 255)
    )
    # Vertical beam highlight
    draw.line([cross_cx - 1, v_top + 4, cross_cx - 1, v_bot - 4], fill=(255, 248, 220, 255), width=2)

    # Horizontal beam
    h_left = cross_cx - 40
    h_right = cross_cx + 40
    h_top = cross_cy - 20
    h_bot = h_top + v_w
    draw.rounded_rectangle(
        [h_left, h_top, h_right, h_bot],
        radius=4,
        fill=(212, 175, 55, 255)
    )
    # Horizontal beam highlight
    draw.line([h_left + 4, h_top + 3, h_right - 4, h_top + 3], fill=(255, 248, 220, 255), width=2)

    # Beam end terminal jewels
    for tx_j, ty_j in [
        (cross_cx, v_top),
        (cross_cx, v_bot),
        (h_left, h_top + v_w // 2),
        (h_right, h_top + v_w // 2)
    ]:
        draw.ellipse([tx_j - 4, ty_j - 4, tx_j + 4, ty_j + 4], fill=(244, 232, 193, 255))

    # Center Radiant Jewel
    draw.ellipse([cross_cx - 6, h_top + v_w // 2 - 6, cross_cx + 6, h_top + v_w // 2 + 6], fill=(255, 255, 255, 255))
    draw.ellipse([cross_cx - 3, h_top + v_w // 2 - 3, cross_cx + 3, h_top + v_w // 2 + 3], fill=(212, 175, 55, 255))

    # 6. English Subtitle: "THE HOLY BIBLE"
    en_text = "THE  HOLY  BIBLE"
    bbox_en = font_en.getbbox(en_text)
    tw_en = bbox_en[2] - bbox_en[0]
    tx_en = fx1 + (fx2 - fx1 - tw_en) // 2
    ty_en = fy2 - 28
    draw.text((tx_en, ty_en + 1), en_text, font=font_en, fill=(0, 0, 0, 160))
    draw.text((tx_en, ty_en), en_text, font=font_en, fill=(212, 175, 55, 220))

    return img

if __name__ == '__main__':
    img_512 = create_bible_icon(512)
    img_512.save('public/icon-512.png', 'PNG')
    
    img_192 = img_512.resize((192, 192), Image.Resampling.LANCZOS)
    img_192.save('public/icon-192.png', 'PNG')
    
    img_apple = img_512.resize((180, 180), Image.Resampling.LANCZOS)
    img_apple.save('public/apple-touch-icon.png', 'PNG')

    # Also update portfolio holy-bible.png so the portfolio card matches perfectly!
    port_dir = 'C:/Users/bsd/Desktop/all in one/New folder 123/portfolio/portfolio/public'
    if os.path.exists(port_dir):
        img_512.save(os.path.join(port_dir, 'holy-bible.png'), 'PNG')

    print('Successfully generated Bible Book Cover icons!')
