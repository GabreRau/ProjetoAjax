const bodyParser = require("body-parser") //biblioteca
const express = require("express") //biblioteca
const app = express() //biblioteca

app.use(express.static('.'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json()) //middware pára ler dados do corpo de requisição
const multer = require("multer") //middware pra lidar com uploads e arquivos

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, '${Date.now()_${file.originalname}')
    }
})

const upload = multer({storage }).single('arquivo')

app.post('/upload', (req, res) =>{
    upload(req, res, err => {
        if(err){
            return res.end('ocorreu um erro.')
        }

        res,end('Concluido com sucesso')
    })
}) 

app.listen(8080, () => console.log('Executando...')
) //coloca o servidor pra rodar na porta 8080.