Server
    install: multer aws-sdk fs-extra
    
    lib:
        s3.js for uploading
                
    middleware:
    
        body-parser.js for dynamic parsing
        
            // DEPENDENCIES
            const multer = require('multer');
            const bodyParser = require('body-parser');
            
            const upload = multer({dest: `${__dirname}/../../temp`})
            
            // INTERFACE
            module.exports = (req, res, next) => {
              let contentType = req.headers['content-type']
            
              if(contentType.indexOf('application/json') > -1)
                return bodyParser.json()(req, res, next)
            
              if(contentType.indexOf('multipart/form-data') > -1)
                return upload.any()(req, res, next) 
            
              next();
              
            }
    
    api: 
        replace jsonParser with ../middleware/body-parser.js
        replace all calls with that new bodyParser
        In the put and post, in the .then of the save()
            if( req.files && req.files.length && typeof record.attachFiles == "function" ) { 
                    return record.attachFiles(req.files);
            }
            
    user.js
        Add the "attachFiles" method
        
        userSchema.methods.attachFiles = function(files) {
        
            let record = this;
            
            let file = files[0];
            let key = `${file.filename}.${file.originalname}`
            return aws.upload(file.path, key)
                .then( url => {
                    record.avatar = url;
                    return record.save();
                });
        }        
        
        
        
Client

    index
    
        this.state = Object.assign(initialState, this.props.user);
        (initialState is an empty obj with all the fields)
        
        use - componentWillReceiveProps to reset the state with the result of the promise (otherwise, race condition)
        If you put this into componentWillMount or the constructor, it happens too early and you get FOUC -- show this
        
            componentWillReceiveProps(props) {
                
                if(props.user) this.setState(props.user);
                
                let preview = null;
                this.setState({preview});
            }

        handleUpload for the image
        
            Use both the avatar and the preview.  Wrap preview in an if so it only shows if you change it.

            handleUpload(e) {
                
              let {files} = e.target;
              let avatarFile = files[0];
              this.setState({avatarFile});
              
              util.photoToDataUrl(avatarFile)
                  .then(preview => { console.log(preview); this.setState({preview}) })
                  .catch(console.error)
        
            }

    actions
    
        Need to use .field() when you use .attach()
        Why? Multi-part form/data --- explain this.
    
        let URL = `${__API_URL__}/user/${user._id}`;
    
        superagent.put(URL)
            .set('Authorization', 'Bearer ' + bearerToken())
            .field('firstname', user.firstname)
            .field('lastname', user.lastname)
            .field('about', user.about)
            .attach('avatar', user.avatarFile)
            .then(res => dispatch(updateProfileAction(res.body)) )
            .catch(console.error);
            
    
    reducer
    
        let defaultState = {};
        
        export default (state=defaultState,action) => {
        
            let {type,payload} = action;
        
            switch(type) {
        
                case "SET_AUTH_USER": {
                    return payload.user;
                }
                
                case "UPDATE_PROFILE": {
                    return Object.assign( {}, state, payload );
                }
                
                default:
                    return state;
        
            }
        
        };
        
Build out the CSS

form.profile {
    
    display:flex;
    flex-direction:column;
    
    label {
        margin: 1.5em 0;
    }
}   
    
figure {
    
    border:1px solid #ccc;
    background:#eee;
    margin:1em 0;
    text-align:center;
    width:150px;
    
    img {
        margin:1em;
    }
    
    figcaption {
        background:#525252;
        color:#fff;
        font-size:.75em;
        font-weight:normal;
    }
}
.preview {
    width:50px;
}