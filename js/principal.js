var banners = ["Do lixo ao luxo!", "Reaproveitar é aproveitar!"];
var bannerActual = 0;

function trocaBanner()
{
	bannerActual = (bannerActual + 1) % 2;
	document.querySelector('h2#mensagem').textContent = banners[bannerActual];
}

setInterval(trocaBanner, 1000);