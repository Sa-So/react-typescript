const totalActions = selectedHealthTargetActions 
    ? selectedHealthTargetActions.reduce((total, item)=>
      total + item.actions.reduce((tot,_i)=>(tot + 1), 0), 0)
    : 0;
