const articles = [
  {
    조: "제1조",
    제목: "목적",
    본문: "이 법은 행정정보의 통합관리와 공동활용에 관한 기본적인 사항을 정함으로써 행정의 효율성과 국민의 편익 증진에 이바지함을 목적으로 한다."
  },
  {
    조: "제2조",
    제목: "정의",
    본문: "이 법에서 사용하는 용어의 뜻은 다음 각 호와 같다. 1. 행정정보란 전자정부법 제2조제6호에 따른 행정정보를 말한다. 2. 공동활용이란 행정기관 간 행정정보를 상호 제공하여 사용하는 것을 말한다. 3. 통합관리란 공공기록물 관리에 관한 법률 제3조에 따른 기록물의 일부로 행정정보를 통합 관리하는 것을 말한다. 4. 데이터 표준이란 행정정보의 공동활용을 위한 형식·코드·식별자에 관한 표준을 말한다."
  },
  {
    조: "제3조",
    제목: "다른 법률과의 관계",
    본문: "행정정보의 통합관리 및 공동활용에 관하여 다른 법률에 특별한 규정이 있는 경우를 제외하고는 이 법에서 정하는 바에 따른다. 특히 개인정보 보호법, 공공데이터의 제공 및 이용 활성화에 관한 법률, 지능정보화 기본법에 따른 사항은 해당 법률을 우선 적용한다."
  },
  {
    조: "제4조",
    제목: "국가 등의 책무",
    본문: "국가와 지방자치단체는 행정정보의 통합관리와 공동활용을 위하여 필요한 시책을 수립하여야 한다. 행정안전부장관은 그 시책을 종합적으로 조정하며, 자세한 사항은 대통령령으로 정한다."
  },
  {
    조: "제5조",
    제목: "기본계획의 수립",
    본문: "행정안전부장관은 행정정보 통합관리 기본계획을 5년마다 수립하여야 한다. 기본계획에는 행정정보 통합관리의 기본방향, 행정정보 공동활용의 활성화 방안, 전자정부법 제3조의 행정기관 정보화 시책과의 연계 등이 포함되어야 한다."
  },
  {
    조: "제6조",
    제목: "시행계획의 수립",
    본문: "행정기관의 장은 매년 시행계획을 수립하여야 하며, 그 결과를 행정안전부장관에게 보고하여야 한다. 시행계획의 형식과 절차는 대통령령으로 정한다."
  },
  {
    조: "제7조",
    제목: "공동활용 협의회",
    본문: "행정정보 공동활용에 관한 사항을 협의하기 위하여 행정안전부에 행정정보 공동활용 협의회를 둔다. 협의회의 구성과 운영에 필요한 사항은 대통령령으로 정한다."
  },
  {
    조: "제8조",
    제목: "공동활용 신청",
    본문: "행정기관의 장은 다른 행정기관이 보유한 행정정보를 활용하려는 경우에는 행정안전부장관에게 신청하여야 한다."
  },
  {
    조: "제9조",
    제목: "공동활용 승인",
    본문: "행정안전부장관은 신청을 받은 경우 개인정보 보호법 제17조에 따른 절차를 거쳐 30일 이내에 승인 여부를 결정하여야 한다."
  },
  {
    조: "제10조",
    제목: "보안 조치",
    본문: "공동활용 시 행정정보의 안전성 확보를 위하여 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보 보호법에서 정하는 보안 조치를 적용하여야 한다."
  },
  {
    조: "제11조",
    제목: "데이터 표준",
    본문: "행정안전부장관은 데이터 표준을 정하여 고시할 수 있다. 데이터 표준의 적용 범위와 시기는 대통령령으로 정한다."
  },
  {
    조: "제12조",
    제목: "표준 적용 의무",
    본문: "행정기관은 행정정보를 생산·관리·활용할 때 제11조에 따른 데이터 표준을 따라야 한다."
  },
  {
    조: "제13조",
    제목: "실태조사",
    본문: "행정안전부장관은 매년 행정정보 통합관리 실태를 조사하여 그 결과를 공개한다."
  },
  {
    조: "제14조",
    제목: "과태료",
    본문: "다음 각 호의 어느 하나에 해당하는 자에게는 1천만원 이하의 과태료를 부과한다. 제8조를 위반하여 승인 없이 공동활용한 자, 제12조에 따른 데이터 표준을 정당한 사유 없이 위반한 자에게 과태료가 부과된다."
  },
  {
    조: "제15조",
    제목: "시행일",
    본문: "이 법은 2026년 7월 1일부터 시행한다."
  }
];

const resultsContainer = document.getElementById("results");
const resultTitle = document.getElementById("result-title");
const resultCount = document.getElementById("result-count");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

function renderArticles(items) {
  resultsContainer.innerHTML = "";

  if (!items.length) {
    resultsContainer.innerHTML = '<div class="empty">검색 결과가 없습니다.</div>';
    resultCount.textContent = "0건";
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((article) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card__meta">${article.조}</div>
      <h3>${article.제목}</h3>
      <p>${article.본문}</p>
    `;
    fragment.appendChild(card);
  });

  resultsContainer.appendChild(fragment);
  resultCount.textContent = `${items.length}건`;
}

function searchArticles(keyword) {
  const normalized = keyword.trim().toLowerCase();
  const filtered = articles.filter((article) => {
    const haystack = `${article.조} ${article.제목} ${article.본문}`.toLowerCase();
    return haystack.includes(normalized);
  });

  if (!normalized) {
    resultTitle.textContent = "전체 조항 보기";
  } else {
    resultTitle.textContent = `검색어: ${keyword}`;
  }

  renderArticles(filtered);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchArticles(searchInput.value);
});

searchInput.addEventListener("input", () => {
  if (!searchInput.value.trim()) {
    searchArticles("");
  }
});

searchArticles("");
