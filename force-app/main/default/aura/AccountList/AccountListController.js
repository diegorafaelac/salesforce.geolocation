({
    doInit: function(component, event){
        var action = component.get("c.findAll");
        action.setCallback(this,function(response){
            component.set("v.accounts",response.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})
