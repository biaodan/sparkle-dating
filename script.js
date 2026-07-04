const estados = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas", "Ciudad de México"];
const select = document.getElementById('citySelect');
estados.forEach(e => { let o = document.createElement('option'); o.value = e; o.text = e; select.appendChild(o); });

function selectGender(btn) {
    document.querySelectorAll('.btn-gender').forEach(b => b.style.borderColor = '#ddd');
    btn.style.borderColor = '#22c55e';
}

// Meta Pixel
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src='https://connect.facebook.net/en_US/fbevents.js';s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script');
fbq('init', '1345532354202874');
fbq('track', 'PageView');

function handleDownload() {
    fbq('track', 'Lead');
    window.location.href = "https://svip1027.top/KFDG556";
}