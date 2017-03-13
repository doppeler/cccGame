/**
 * Created by Class on 2017/3/7.
 */
var consts = require('../../../consts/consts');
var Token = require('../../../util/token');
var secret = require('../../../../config/session').secret;
require('../../../base/CBaseHandler');


Class({
    ClassName:"CPomelo.Handler.CZJHHandler",
    Base:"CPomelo.Handler.CBaseHandler",
    join:function(msg, session, next)
    {
        this.app.rpc.zjhRemote.join(null,msg.rid,session.uid,session.frontendId ,next)
    },
    ready:function(msg, session, next)
    {
        this.app.rpc.zjhRemote.ready(null,session.uid ,next)
    },
    start:function(msg, session, next)
    {
        this.app.rpc.zjhRemote.start(null,session.uid ,next)
    },
    giveup:function(msg, session, next)
    {
        this.app.rpc.zjhRemote.giveup(null,session.uid ,next)
    },
    follow:function(msg, session, next)
    {
        this.app.rpc.zjhRemote.follow(null,msg.p,session.uid ,next)
    },
    see:function(msg, session, next)
    {
        this.app.rpc.zjhRemote.seeCards(null,session.uid ,next)
    }

})

module.exports = function(app) {
    return new CPomelo.Handler.CZJHHandler(app);
};