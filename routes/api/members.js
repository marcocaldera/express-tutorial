const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')

/*
Gets All Members
GET: http://localhost:5000/api/members
return: oggetto json con tutti i members
*/
router.get('/', (req, res) => res.json(members))

/*
Get Single Member
GET: http://localhost:5000/api/members/:id
return: oggetto json con i members
*/
router.get('/:id', (req, res) => {

    // req.params.id contiene il valore del parametro :id
    // dobbiamo castarlo ad intero perchè di default ci viene restituito come stringa
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `Member ${req.params.id} not found` })
    }
})

/*
Create Member
POST: http://localhost:5000/api/members
return 400 (se manca mail o email) oppure tutti i membri presenti, compreso quello inserito
*/
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email' })
    }

    members.push(newMember)
    res.json(members) // se utilizziamo express come web server API
    // res.redirect('/') // se utilizziamo express per mostrare pagine web dinamiche

})

/*
Update Member
Per aggiornare si usa una put
*/
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        const updateMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;

                res.json({ msg: 'Member updated', member })
            }
        })

    } else {
        res.status(400).json({ msg: `Member ${req.params.id} not found` })
    }
})

/*
Delete Member
*/
router.delete('/:id', (req, res) => {

    // req.params.id contiene il valore del parametro :id
    // dobbiamo castarlo ad intero perchè di default ci viene restituito come stringa
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        })
    } else {
        res.status(400).json({ msg: `Member ${req.params.id} not found` })
    }
})


module.exports = router;