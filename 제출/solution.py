import csv
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
DATA = HERE / "첨부" / "조항데이터.json"


def main():
    if len(sys.argv) < 2:
        print("사용법: python solution.py <키워드>")
        sys.exit(1)

    keyword = sys.argv[1].strip()
    articles = json.loads(DATA.read_text(encoding="utf-8"))

    filtered = [
        article
        for article in articles
        if keyword.lower() in article.get("본문", "").lower()
    ]

    output_dir = HERE / "자동화"
    output_dir.mkdir(exist_ok=True)
    out = output_dir / f"결과_{keyword}.csv"
    with out.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["조", "제목", "본문"])
        for article in filtered:
            writer.writerow([article["조"], article["제목"], article["본문"]])

    print(f"[OK] {len(filtered)}건 저장 → {out.relative_to(HERE)}")


if __name__ == "__main__":
    main()
