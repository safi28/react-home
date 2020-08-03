export const ActionTypes = {
  Increase: Symbol("[SLIDE] Increase"),
  IncreaseFailure: Symbol('[SLIDE] Increase Failure'),
  IncreaseSuccess: Symbol('[SLIDE] Increase Successs'),

  Decrease: Symbol("[SLIDE] Decrease"),
  DecreaseFailure: Symbol('[SLIDE] Decrease Failure'),
  DecreaseSuccess: Symbol('[SLIDE] Decrease Successs'),
};

export const increase = (product) => ({ type: ActionTypes.Increase, payload: { product }});
export const increaseFailure = (error) => ({ type: ActionTypes.IncreaseFailure, payload: { error }});
export const increaseSuccess = (product) => ({ type: ActionTypes.IncreaseSuccess, payload: { product }});

export const decrease = (product) => ({ type: ActionTypes.Decrease, payload: product });
export const decreaseFailure = (error) => ({ type: ActionTypes.DecreaseFailure, payload: { error }});
export const decreaseSuccess = (product) => ({ type: ActionTypes.DecreaseSuccess, payload: product });