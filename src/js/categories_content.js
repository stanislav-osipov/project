(function(doc){
function CategoryItem(name, image, ref, count) {
	CatalogItem.call(this, name, image, ref)
	this.count = count
}
CategoryItem.prototype = Object.create(CatalogItem.prototype)

var categories = []
categories.push(new CategoryItem("Volleyball gear", "volleyball.jpg", "item_list.html", "32"))
categories.push(new CategoryItem("Basketball gear", "basketball.jpg", "item_list1.html", "41"))
categories.push(new CategoryItem("Football gear", "football.jpg", "item_list.html", "54"))
categories.push(new CategoryItem("Gym gear", "gym.jpg", "item_list.html", "17"))
categories.push(new CategoryItem("Cycling gear", "cycling.jpg", "item_list.html", "23"))
categories.push(new CategoryItem("Athletic gear", "athlet.jpg", "item_list.html", "11"))

function CreateCategoryNode(category) {
	var item_node = doc.createElement("div")
	item_node.setAttribute("class", "item content__item")
	
	var item_ref = doc.createElement("a")
	item_ref.setAttribute("class", "item__link")
	item_ref.setAttribute("href", category.ref)
	
	var item_image = doc.createElement("img")
	item_image.setAttribute("class", "item__image")
	item_image.setAttribute("src", "images/categories/" + category.image)
	item_image.setAttribute("alt", "Section \'" + category.name + "\'")
	
	var item_text = doc.createElement("ul")
	item_text.setAttribute("class", "item__text")
	
	var item_text_node_name = doc.createElement("li")
	var text_node_name = doc.createTextNode(category.name)
	
	var item_text_node_count = doc.createElement("li")
	var text_node_count = doc.createTextNode("(" + category.count + ")")

	item_text_node_name.appendChild(text_node_name)
	
	item_text_node_count.appendChild(text_node_count)
	
	item_text.appendChild(item_text_node_name)
	item_text.appendChild(item_text_node_count)
	
	item_ref.appendChild(item_image)
	item_ref.appendChild(item_text)
	
	item_node.appendChild(item_ref)

	return item_node
}

function CategoriesToDOM(categories, idDOM) {
	var content = doc.createElement("div")
	content.setAttribute("class", "content page__content")
	for (var i = 0; i < categories.length; i++) {
		var item_node = CreateCategoryNode(categories[i])
		content.appendChild(item_node)
	}
	
	doc.getElementById(idDOM).appendChild(content)
}

doc.onload = CategoriesToDOM(categories,"content-wrapper")
	
}(document));