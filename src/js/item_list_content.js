function Wares_item(name, image, ref, price) {
	Catalog_item.call(this, name, image, ref)
	this.price = price
}
Wares_item.prototype = Object.create(Catalog_item.prototype)

var wares = []
wares.push(new Wares_item("Nice ball", "volleyball/ball_mik.jpg", "item_card.html", "$555"))
wares.push(new Wares_item("Beach ball", "volleyball/ball_beach.jpg", "item_card1.html", "$444"))
wares.push(new Wares_item("Nice shoes", "volleyball/vol_shoes.jpg", "item_card.html", "$333"))
wares.push(new Wares_item("Nice knee pads", "volleyball/knee_pad.jpg", "item_card.html", "$111"))
wares.push(new Wares_item("Nice beach net", "volleyball/beach_net.jpg", "item_card.html", "$1111"))

function WaresToPage() {
	var content = document.createElement("div")
	content.setAttribute("class", "content page__content")
		
	var view_option = document.createElement("div")
	view_option.setAttribute("class", "content__view-option")
	
	var view = document.createElement("div")
	view.setAttribute("class", "view-option")
	
	var view_link = document.createElement("a")
	view_link.setAttribute("class", "item__link")
	view_link.setAttribute("href", "item_list_grid.html")
	
	var view_text = document.createTextNode("Grid View")
	
	view_link.appendChild(view_text)
	view.appendChild(view_link)
	view_option.appendChild(view)
	
	content.appendChild(view_option)
	
	for (var i = 0; i < wares.length; i++) {
		var item_node = document.createElement("div")
		item_node.setAttribute("class", "item content__item")
		
		var item_ref = document.createElement("a")
		item_ref.setAttribute("class", "item__link")
		item_ref.setAttribute("href", wares[i].ref)
		
		var item_image = document.createElement("img")
		item_image.setAttribute("class", "item__image")
		item_image.setAttribute("src", "images/categories/" + wares[i].image)
		item_image.setAttribute("alt", "Item " + i)
		
		var item_text = document.createElement("ul")
		item_text.setAttribute("class", "item__text")
		
		var item_text_node_name = document.createElement("li")
		var text_node_name = document.createTextNode(wares[i].name)
		
		var item_text_node_count = document.createElement("li")
		var text_node_count = document.createTextNode(wares[i].price)
		
		item_text_node_name.appendChild(text_node_name)
		
		item_text_node_count.appendChild(text_node_count)
		
		item_text.appendChild(item_text_node_name)
		item_text.appendChild(item_text_node_count)
		
		item_ref.appendChild(item_image)
		item_ref.appendChild(item_text)
		
		item_node.appendChild(item_ref)
		
		content.appendChild(item_node)
	}
	
	document.getElementById("content-wrapper").appendChild(content)
}