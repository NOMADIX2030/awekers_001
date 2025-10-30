// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 모바일 메뉴 토글
    const mobileMenuToggle = document.querySelector('.ai_mobile_menu_toggle');
    const navMenu = document.querySelector('.ai_nav_menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('ai_nav_menu_active');
            mobileMenuToggle.classList.toggle('ai_mobile_menu_toggle_active');
        });
    }
    
    // 스무스 스크롤 네비게이션
    const navLinks = document.querySelectorAll('.ai_nav_link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.ai_header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // 모바일 메뉴 닫기
            if (navMenu.classList.contains('ai_nav_menu_active')) {
                navMenu.classList.remove('ai_nav_menu_active');
                mobileMenuToggle.classList.remove('ai_mobile_menu_toggle_active');
            }
        });
    });
    
    // 헤더 스크롤 효과
    const header = document.querySelector('.ai_header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('ai_header_scrolled');
        } else {
            header.classList.remove('ai_header_scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 섹션별 활성 네비게이션 표시
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.ai_nav_link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // 모든 링크에서 활성 클래스 제거
                navLinks.forEach(link => link.classList.remove('ai_nav_link_active'));
                // 현재 섹션의 링크에 활성 클래스 추가
                if (navLink) {
                    navLink.classList.add('ai_nav_link_active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // 폼 제출 처리
    const contactForm = document.querySelector('.ai_contact_form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 수집
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // 간단한 유효성 검사
            if (!name || !email || !subject || !message) {
                alert('모든 필드를 입력해주세요.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('올바른 이메일 주소를 입력해주세요.');
                return;
            }
            
            // 성공 메시지 (실제로는 서버로 전송)
            alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.');
            this.reset();
        });
    }
    
    // 이메일 유효성 검사 함수
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // 스크롤 애니메이션 (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ai_animate_in');
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들 관찰
    const animateElements = document.querySelectorAll('.ai_service_card, .ai_portfolio_item, .ai_about_text, .ai_contact_item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // 통계 숫자 카운트 애니메이션
    const statNumbers = document.querySelectorAll('.ai_stat_number');
    
    function animateNumbers() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/\D/g, ''));
            const suffix = stat.textContent.replace(/\d/g, '');
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + suffix;
            }, 30);
        });
    }
    
    // 통계 섹션이 보일 때 숫자 애니메이션 실행
    const statsSection = document.querySelector('.ai_about_stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    // 버튼 호버 효과
    const buttons = document.querySelectorAll('.ai_btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 카드 호버 효과 강화
    const cards = document.querySelectorAll('.ai_service_card, .ai_portfolio_item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
});

// 페이지 로드 완료 후 실행
window.addEventListener('load', function() {
    // 로딩 애니메이션 (필요시)
    document.body.classList.add('ai_loaded');
    
    // 초기 스크롤 위치 설정
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            const headerHeight = document.querySelector('.ai_header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            setTimeout(() => {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});
