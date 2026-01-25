var banners = ["Os melhores de Angola!", "Qualidade e preço baixo!"];
var bannerActual = 0;

function trocaBanner()
{
	bannerActual = (bannerActual + 1) % 2;
	document.querySelector('h2#mensagem').textContent = banners[bannerActual];
}

setInterval(trocaBanner, 2000);