class Node {
    constructor(data='', left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    
    constructor() {
        this.root = null;
    }
    
    insert(data) {
        
        const node = this.root;
        
        // Create a new root if we're just getting started.
        if ( node === null ) { 
            this.root = new Node(data);
            return;
        }
        
        const _walk = (node) => {
            
            // Left is Less
            if( data < node.data ) { 
                if ( node.left === null ) { 
                    node.left = new Node(data);
                }
                else if ( node.left !== null ) {
                    _walk(node.left);
                }
            }
            
            // Right is might
            else if ( data > node.data ) { 
                if ( node.right === null ) { 
                    node.right = new Node(data);
                }
                else if ( node.right !== null ) { 
                    _walk(node.right);
                }
            }
            
            else {
                return null;
            }
        
        }
        
        _walk(node);
    }
    
    prettyPrint() {
        pretty(this);
    }
    
    pretty(node) {
        
    }
    
}

module.exports = BST;