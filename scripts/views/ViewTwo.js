/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 5/11/12
 * Time: 3:23 PM
 */

var ViewTwo = Backbone.View.extend({

    id:'viewTwo',

    events:{
        'click button':'button_clickHandler'
    },

    render:function () {
        this.$el.html('<p>This is a ViewTwo </p><p><button>Pop ViewTwo</button></p>');
        return this;
    },

    button_clickHandler:function (event) {
        this.stackNavigator.popView();
    }
});