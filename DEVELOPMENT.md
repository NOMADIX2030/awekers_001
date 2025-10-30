# 개발 가이드 - 아커스 프로젝트

## 🎯 프로젝트 목표
아커스 비즈니스 홈페이지를 반응형 원페이지로 구현하여 브랜드 이미지와 서비스를 효과적으로 전달

## 🛠️ 개발 환경
- **OS**: macOS (아이맥)
- **에디터**: Cursor AI
- **버전 관리**: Git + GitHub
- **배포**: GitHub Pages

## 📋 구현된 기능 목록

### ✅ 완료된 기능
1. **HTML 구조**
   - 시맨틱 HTML5 마크업
   - SEO 최적화 메타태그
   - 접근성 고려한 구조

2. **CSS 스타일링**
   - 모바일 우선 반응형 디자인
   - Pretendard 폰트 적용
   - CSS Grid & Flexbox 레이아웃
   - 애니메이션 효과

3. **JavaScript 기능**
   - 스무스 스크롤 네비게이션
   - 모바일 메뉴 토글
   - 스크롤 애니메이션
   - 폼 유효성 검사

4. **배포 설정**
   - GitHub Pages 활성화
   - HTTPS 강제 적용
   - 자동 배포 설정

## 🎨 디자인 시스템

### 색상 팔레트
```css
--primary-blue: #2563eb;
--text-dark: #1f2937;
--text-gray: #6b7280;
--background-light: #f9fafb;
--white: #ffffff;
```

### 타이포그래피
- **폰트**: Pretendard (한글 최적화)
- **제목**: 36px-48px (데스크톱), 28px-36px (모바일)
- **본문**: 16px-18px
- **라인 높이**: 1.6

### 반응형 브레이크포인트
```css
/* 모바일 우선 */
@media (max-width: 480px) { /* 모바일 */ }
@media (max-width: 768px) { /* 태블릿 */ }
/* 데스크톱은 기본 스타일 */
```

## 🔧 코드 구조

### CSS 클래스 명명 규칙
- **접두사**: `ai_` (중복 방지)
- **BEM 방식**: `.ai_component__element--modifier`
- **예시**: `.ai_nav_menu`, `.ai_btn_primary`

### JavaScript 모듈 구조
```javascript
// DOM 로드 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴
    // 스무스 스크롤
    // 폼 처리
    // 애니메이션
});
```

## 📱 섹션별 상세 정보

### 1. 헤더 (ai_header)
- **고정 위치**: `position: fixed`
- **백드롭 필터**: `backdrop-filter: blur(10px)`
- **모바일 메뉴**: 햄버거 아이콘 + 슬라이드 메뉴

### 2. 홈 (ai_hero)
- **그라데이션 배경**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **2컬럼 레이아웃**: 텍스트 + 이미지
- **CTA 버튼**: Primary/Secondary 스타일

### 3. 회사소개 (ai_about)
- **통계 카드**: 숫자 카운트업 애니메이션
- **2컬럼 레이아웃**: 텍스트 + 통계

### 4. 서비스 (ai_services)
- **3컬럼 그리드**: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- **호버 효과**: `transform: translateY(-5px)`

### 5. 포트폴리오 (ai_portfolio)
- **카드 레이아웃**: 이미지 + 콘텐츠
- **플레이스홀더**: 실제 이미지 대체 예정

### 6. 연락처 (ai_contact)
- **2컬럼 레이아웃**: 정보 + 폼
- **폼 유효성 검사**: 이메일 형식, 필수 필드

## 🚀 배포 워크플로우

### 로컬 개발
```bash
# 1. 파일 수정
# 2. 브라우저에서 확인 (file:// 또는 로컬 서버)
# 3. Git 커밋
git add .
git commit -m "기능 설명"
git push
```

### 배포 확인
1. GitHub Pages 상태 확인
2. 실제 URL에서 테스트
3. 모바일/태블릿/데스크톱 반응형 확인

## 🐛 알려진 이슈 및 해결책

### 1. 모바일 메뉴 토글
- **문제**: 햄버거 아이콘 애니메이션
- **해결**: CSS transform으로 X 모양 변환

### 2. 스크롤 애니메이션
- **문제**: Intersection Observer 브라우저 호환성
- **해결**: 폴백으로 scroll 이벤트 사용

### 3. 폰트 로딩
- **문제**: 웹폰트 로딩 지연
- **해결**: CDN 사용, font-display: swap

## 📈 성능 최적화

### 이미지 최적화 (향후)
- WebP 형식 사용
- 반응형 이미지 (srcset)
- Lazy loading 적용

### CSS 최적화
- Critical CSS 인라인
- 미사용 CSS 제거
- CSS 압축

### JavaScript 최적화
- 이벤트 위임 사용
- 디바운싱/스로틀링 적용
- 번들 크기 최적화

## 🔄 업데이트 가이드

### 새로운 섹션 추가
1. HTML에 섹션 추가
2. CSS 스타일 작성
3. JavaScript 기능 추가
4. 네비게이션 메뉴 업데이트

### 디자인 변경
1. CSS 변수 수정
2. 컴포넌트별 스타일 조정
3. 반응형 테스트
4. 브라우저 호환성 확인

---
*이 문서는 프로젝트 진행에 따라 지속적으로 업데이트됩니다.*
