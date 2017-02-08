// create svg images 
export class SvgCirle{
	constructor(selector){
		this.elements = $(selector);
		this.init();
	}
	init(){
		this.elements.each((index,el) => {
			let text = $(el).data("name"),
				level = $(el).data("val"),
				svg = this.getNode('svg', {width: 110, heigth: 110}),
				circle = this.getNode('circle', {cx: 55, cy:55, r:45, stroke:"#dfdcd5", strokeWidth:20, fill:"none"}),
				progressBar = this.getNode('circle', {cx: 55, cy:55, r:45, opacity:level/100, strokeDashoffset:Math.PI*0.9*(100-level), strokeDasharray: (Math.PI*90), transform: "rotate(-90,55,55)", stroke:"blue", strokeWidth:20, fill:"none"}),
				textNode = this.getNode('text', {fontSize:12, stroke:"blue", strokeWidth:.5, y:60, x:55, textAnchor:"middle"});
 
			textNode.innerHTML = text;

			svg.append(circle);
			svg.append(progressBar);
			svg.append(textNode);
			el.append(svg);
		});
	}
	// create svg-node with given paremeters, parameters (nodeName: string, attribures: object)
	getNode(nodeName, attributes) {
		let element = document.createElementNS("http://www.w3.org/2000/svg", nodeName);
		for (let attribute in attributes){
			element.setAttributeNS(null, attribute.replace(/[A-Z]/g, function(m, p, o, s) { return "-" + m.toLowerCase(); }), attributes[attribute]);
		}
		return element;
	}
}
