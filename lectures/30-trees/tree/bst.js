class Node {
    constructor(value='', left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        
        const node = this.root;
        
        // Create a new root if we're just getting started.
        if ( node === null ) { 
            console.log("Create Root", value);
            this.root = new Node(value);
            return;
        }
        
        const _insert = (node) => {
            
            console.log("Insert Value/Node Value", value, node.value);
            // Left is Less
            if( value < node.value ) { 
                if ( node.left === null ) { 
                    console.log("Going to the left");
                    node.left = new Node(value);
                    return;
                }
                else if ( node.left !== null ) {
                    return _insert(node.left);
                }
            }
            
            // Right is might
            else if ( value > node.value ) { 
                if ( node.right === null ) { 
                    console.log("Going to the right");
                    node.right = new Node(value);
                    return;
                }
                else if ( node.right !== null ) { 
                    return _insert(node.right);
                }
            }
            
            else {
                console.log("???");
                return null;
            }
        
        }
        
        _insert(node);
    }
    
    min() {
        let current = this.root;
        while(current.left !== null ) { 
            current = current.left;
        }
        return current.value;
    }
    
    max() {
        let current = this.root;
        while(current.right !== null ) { 
            current = current.right;
        }
        return current.value;
    }
    
    
    DFS(node, level) {
        console.log( node.value);
        if (node.left) this.DFS(node.left, level++);
        if (node.right) this.DFS(node.right, level++);
    };

    prettyPrint() {
        console.log(this.root);
        this.DFS(this.root,1);
    }
    
}

module.exports = BST;