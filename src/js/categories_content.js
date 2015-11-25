function Category_item(name, image, ref, count) {
	Catalog_item.call(this, name, image, ref)
	this.count = count
}
Category_item.prototype = Object.create(Catalog_item.prototype)

var categories = []
categories.push(new Category_item("Volleyball gear", "volleyball.jpg", "item_list.html", "32"))
categories.push(new Category_item("Basketball gear", "basketball.jpg", "item_list1.html", "41"))
categories.push(new Category_item("Football gear", "football.jpg", "item_list.html", "54"))
categories.push(new Category_item("Gym gear", "gym.jpg", "item_list.html", "17"))
categories.push(new Category_item("Cycling gear", "cycling.jpg", "item_list.html", "23"))
categories.push(new Category_item("Athletic gear", "athlet.jpg", "item_list.html", "11"))

function CategoriesToPage() {
	var content = document.createElement("div")
	content.setAttribute("class", "content page__content")
	for (var i = 0; i < categories.length; i++) {
		var item_node = document.createElement("div")
		item_node.setAttribute("class", "item content__item")
		
		var item_ref = document.createElement("a")
		item_ref.setAttribute("class", "item__link")
		item_ref.setAttribute("href", categories[i].ref)
		
		var item_image = document.createElement("img")
		item_image.setAttribute("class", "item__image")
		item_image.setAttribute("src", "images/categories/" + categories[i].image)
		item_image.setAttribute("alt", "Section " + i)
		
		var item_text = document.createElement("ul")
		item_text.setAttribute("class", "item__text")
		
		var item_text_node_name = document.createElement("li")
		var text_node_name = document.createTextNode(categories[i].name)
		
		var item_text_node_count = document.createElement("li")
		var text_node_count = document.createTextNode("(" + categories[i].count + ")")
		
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