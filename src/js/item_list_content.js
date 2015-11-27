(function(doc){
function WaresItem(name, image, ref, price) {
	CatalogItem.call(this, name, image, ref)
	this.price = price
}
WaresItem.prototype = Object.create(CatalogItem.prototype)

var wares = []
wares.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "item_card.html", "$555"))
wares.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "item_card1.html", "$444"))
wares.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "item_card.html", "$333"))
wares.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "item_card.html", "$111"))
wares.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "item_card.html", "$1111"))

function CreateWareNode(ware) {
	var item_node = doc.createElement("div")
	item_node.setAttribute("class", "item content__item")
	
	var item_ref = doc.createElement("a")
	item_ref.setAttribute("class", "item__link")
	item_ref.setAttribute("href", ware.ref)
	
	var item_image = doc.createElement("img")
	item_image.setAttribute("class", "item__image")
	item_image.setAttribute("src", "images/categories/" + ware.image)
	item_image.setAttribute("alt", "Item \'" + ware.name + "\'")
	
	var item_text = doc.createElement("ul")
	item_text.setAttribute("class", "item__text")
	
	var item_text_node_name = doc.createElement("li")
	var text_node_name = doc.createTextNode(ware.name)
	
	var item_text_node_count = doc.createElement("li")
	var text_node_count = doc.createTextNode(ware.price)
	
	item_text_node_name.appendChild(text_node_name)
	
	item_text_node_count.appendChild(text_node_count)
	
	item_text.appendChild(item_text_node_name)
	item_text.appendChild(item_text_node_count)
	
	item_ref.appendChild(item_image)
	item_ref.appendChild(item_text)
	
	item_node.appendChild(item_ref)	
	
	return item_node
}

function CreateViewOptionNode() {	
	var view_option = doc.createElement("div")
	view_option.setAttribute("class", "content__view-option")
	
	var view = doc.createElement("div")
	view.setAttribute("class", "view-option")
	
	var view_link = doc.createElement("a")
	view_link.setAttribute("class", "item__link")
	view_link.setAttribute("href", "item_list_grid.html")
	
	var view_text = doc.createTextNode("Grid View")
	
	view_link.appendChild(view_text)
	view.appendChild(view_link)
	view_option.appendChild(view)

	return view_option	
}

function WaresToDOM(wares, idDOM) {
	var content = doc.createElement("div")
	content.setAttribute("class", "content page__content")
	
	var view_option = CreateViewOptionNode()
	content.appendChild(view_option)
	
	for (var i = 0; i < wares.length; i++) {
		item_node = CreateWareNode(wares[i])
		content.appendChild(item_node)
	}
	
	doc.getElementById("content-wrapper").appendChild(content)
}

doc.onload = WaresToDOM(wares,"content-wrapper")

}(document));