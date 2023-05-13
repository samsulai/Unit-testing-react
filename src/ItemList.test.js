import TestRender from "react-test-renderer"
import ItemList from "./ItemList"

describe("ItemList", () => {
	const items = [
{id : 1, name : "Item 1"},
{id : 2, name : "Item 2"},
{id : 3, name : "Item 3"}
	]
	it('renders correctly', () => {
 const tree = TestRender.create(<ItemList items={items} />)
 	expect(tree.toJSON()).toMatchSnapshot()
	})

it('renders correct number of items', () => {
 const tree = TestRender.create(<ItemList items={items} />)
 	const root = tree.root 
 	expect(root.findAllByType("li").length).toEqual(items.length)
	})
	
	it('renders the correct item names', () => {
 const tree = TestRender.create(<ItemList items={items} />)
 	const root = tree.root 
 	const liNodes = root.findAllByType('li')
 	liNodes.forEach((node, index)=> {
expect(node.children).toEqual([items[index].name])
 	})
 	
	})
})