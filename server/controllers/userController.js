const User = require('../models/userModel')

exports.postUser = async(req, res) => {
    try {
        const { name, email, password } = req.body
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' })
        }
        const user = await User.create({ name, email, password })
        await user.save()
        res.status(201).json({ message: 'User created successfully', user })

    } catch (error) {
        return res.status(400).json({ message: 'Server error', error })
    }
}

exports.getUser = async(req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (user) {
            return res.status(200).json({ user })
        } else {
            return res.status(400).json({ message: 'User not found' })
        }
    } catch (error) {
        return res.status(400).json({ message: 'Server error', error })
    }
}

exports.getUsers = async(req, res) => {
    try {
        const user = await User.find()
        if (user) {
            return res.status(200).json({ user })
        }
    } catch (error) {
        return res.status(400).json({ message: 'Server error', error })
    }
}

exports.updateUser = async(req, res) => {
    try {
        const { id } = req.params
        const { name, email, password } = req.body
        const user = await User.findByIdAndUpdate(id, { name, email, password }, {
            new: true
        })
        if (user) {
            return res.status(200).json({ user })
        } else {
            return res.status(400).json({ message: 'User not found' })

        }

    } catch (error) {
        return res.status(400).json({ message: 'Server error', error })

    }
}

exports.deleteUser = async(req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({ message: 'User deleted' })
    } catch (error) {
        return res.status(400).json({ message: 'Server error', error })
    }
}