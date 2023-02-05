import './form-input.styles.scss'

const FormInput = ({labelTextContent, ...otherProps})=>{
    return (
        <div className="group">
            <input className="form-input"{...otherProps}/>
            {labelTextContent && (
                <label 
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {labelTextContent}
                </label>
            )}
        </div>
    )
}

export default FormInput
//  required type="text"  onChange={handleChange} name='displayName' value={displayName} 