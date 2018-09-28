class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }
  
  each(callback) {
    this.HTMLElements.forEach((el) => {
      callback(el);
    });
  }
  
  map(callback) {
    result = [];
    this.each((el) => {
      result.push(callback(el));
    });
    return result;
  }
  
  html(string) {
    if (string === undefined) {
      return this.HTMLElements[0].innerHTML;
      } else {
      this.each(el => el.innerHTML = string);
    }
  }
  
  empty() {
    this.html('');
  }
  
  append(argument) {
    if (argument instanceof DOMNodeCollection) {
      let outerHTMLStr = "";
      
      argument.each((el) => {
        outerHTMLStr += el.outerHTML;
      });
      
      for(let i = 0; i < this.HTMLElements.length; i++) {
        this.HTMLElements.reverse()[i].innerHTML += outerHTMLStr;
      }
      this.HTMLElements.reverse();
    } else if (argument instanceof HTMLElement) {
      this.append(new DOMNodeCollection([argument]));
    } else {
      for(let i = 0; i < this.HTMLElements.length; i++) {
        this.HTMLElements.reverse()[i].innerHTML += argument;
      }
      this.HTMLElements.reverse();
    }
  }
  
  attr(attribute, value) {
    if (value === undefined) {
      return this.HTMLElements[0].getAttribute(attribute);
    } else {
      this.each((el) => {
        el.setAttribute(attribute, value);
      });
    }
  }
  
  addClass(value) {
    this.each(node => {
      let classString = node.getAttribute('class'); 
      classString += ` ${value}`;
      node.setAttribute('class', classString);
    });
  }
  
  removeClass(value) {
    this.each((node) => {
      let classesArray = node.getAttribute('class').split(" ");
      classesArray.splice(classesArray.indexOf(value), 1);
      node.setAttribute('class', classesArray.join(" "));
    });
  }
  
  
  
}

module.exports = DOMNodeCollection;