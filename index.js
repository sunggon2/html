// index.js
export function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 }, // 지도의 초기 중심 위치 (샌프란시스코)
      zoom: 10, // 초기 줌 레벨
    });
  }
  
  // Google Maps API 로드 후 호출될 콜백 함수 등록
  window.initMap = initMap;
