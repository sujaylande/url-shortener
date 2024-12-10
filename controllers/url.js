const express = require("express");
const Url = require("../models/Url.js")
const shortid = require("shortid");

const createUrl = async (req, res) => {
    try{
        const orgurl = req.body.originalUrl;
        const short = shortid.generate();

        if(!orgurl){
            return res.status(400).json({
                message: "orignal URL required!"
            });
        }

        const url = await Url.create({
            shortId: short,
            originalUrl: orgurl,
            clicksInfo: []
        });

        return res.redirect(`/?shortId=${short}`);
    }
    catch(err){
        console.log("error in createUrl ", err);
        return res.status(500).json({
            message: "server error!"
        });
    }
}

const visiteUrl = async (req, res) => {
    try{
        const short = req.params.shortId;

        console.log(short);

        if(!short){
            return res.status(400).json({
                message: "Shortid required!"
            });
        }

        const url = await Url.findOneAndUpdate({
            shortId: short
        }, {
            $push:{
                clicksInfo:{
                    timestamp: Date.now()
                }
            }
        },
        {returnNewDocument: true});

        if(!url){
            return res.status(404).json({
                message: "URL not found!"
            });
        }

        return res.redirect(url.originalUrl);
    
    }
    catch(err){
        console.log("error in visiteUrl ", err);
        return res.status(500).json({
            message: "server error!"
        });
    }
}


module.exports = {createUrl, visiteUrl}