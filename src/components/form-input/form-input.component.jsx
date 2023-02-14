import {FormInputLabel, Input, Group } from './form-input.styles.jsx'

const FormInput = ({labelTextContent, ...otherProps})=>{
    return (
        <Group>
            <Input {...otherProps}/>
            {labelTextContent && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {labelTextContent}
                </FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput
//  required type="text"  onChange={handleChange} name='displayName' value={displayName} 