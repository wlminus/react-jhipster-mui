"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = exports.ValidatedBlobField = exports.ValidatedField = exports.ValidatedInput = exports.ValidatedForm = void 0;
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_2 = require("react");
const react_hook_form_1 = require("react-hook-form");
const Button_1 = (0, tslib_1.__importDefault)(require("@mui/material/Button"));
const Grid_1 = (0, tslib_1.__importDefault)(require("@mui/material/Grid"));
const TextField_1 = (0, tslib_1.__importDefault)(require("@mui/material/TextField"));
const util_1 = require("../util");
const FormGroup_1 = (0, tslib_1.__importDefault)(require("@mui/material/FormGroup"));
/**
 * A wrapper for simple validated forms using Reactstrap Form and React-hook-form.
 * The validated fields/inputs must be direct children of the form.
 * This components injects methods and values from react-hook-form's `useForm` hook into the ValidatedField/ValidatedInput components
 * For complex use cases or for nested children, use Reactstrap form elements
 * or ValidatedField or ValidatedInput and pass methods and values from react-hook-form's `useForm` hook
 * directly as props
 *
 * @param ValidatedFormProps
 * @returns JSX.Element
 */
function ValidatedForm(_a) {
    var { defaultValues, children, onSubmit, mode } = _a, rest = (0, tslib_1.__rest)(_a, ["defaultValues", "children", "onSubmit", "mode"]);
    const { control, handleSubmit, register, reset, setValue, formState: { errors, touchedFields, dirtyFields }, } = (0, react_hook_form_1.useForm)({ mode: mode || 'onTouched', defaultValues });
    (0, react_2.useEffect)(() => {
        reset(defaultValues);
    }, [reset, defaultValues]);
    return (react_1.default.createElement("form", Object.assign({ onSubmit: handleSubmit(onSubmit) }, rest), react_1.default.Children.map(children, (child) => {
        var _a;
        const type = child === null || child === void 0 ? void 0 : child.type;
        const isValidated = type && ((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.name) && ['ValidatedField', 'ValidatedInput', 'ValidatedBlobField'].includes(type.displayName);
        if (isValidated) {
            const childName = child.props.name;
            const elem = Object.assign(Object.assign({}, child.props), { register: child.props.register || register, error: child.props.error || errors[childName], isTouched: typeof child.props.isTouched === 'undefined' ? touchedFields[childName] : child.props.isTouched, isDirty: typeof child.props.isDirty === 'undefined' ? dirtyFields[childName] : child.props.isDirty, key: childName, control });
            if (type.displayName === 'ValidatedBlobField') {
                const defaultValue = defaultValues[childName];
                const defaultContentType = defaultValues[`${childName}ContentType`];
                elem.setValue = typeof child.props.setValue === 'undefined' ? setValue : child.props.setValue;
                elem.defaultValue = typeof child.props.defaultValue === 'undefined' ? defaultValue : child.props.defaultValue;
                elem.defaultContentType =
                    typeof child.props.defaultContentType === 'undefined' ? defaultContentType : child.props.defaultContentType;
            }
            return react_1.default.createElement(type, Object.assign({}, elem));
        }
        return child;
    })));
}
exports.ValidatedForm = ValidatedForm;
ValidatedForm.displayName = 'ValidatedForm';
/**
 * A utility wrapper over Reactstrap Input component thats uses react-hook-form data to
 * show error message and error/validated styles.
 * This component can be used with ValidatedForm
 *
 * @param ValidatedInputProps
 * @returns JSX.Element
 */
function ValidatedInput(_a) {
    var { name, id = name, register, error, isTouched, isDirty, validate, children, className, onChange, onBlur, control } = _a, attributes = (0, tslib_1.__rest)(_a, ["name", "id", "register", "error", "isTouched", "isDirty", "validate", "children", "className", "onChange", "onBlur", "control"]);
    if (!register) {
        return (react_1.default.createElement(react_hook_form_1.Controller, { name: `${name}-wraper`, control: control, render: ({ field }) => (react_1.default.createElement(TextField_1.default, Object.assign({ id: id, className: className, onChange: onChange }, field, attributes))) }));
    }
    className = className || '';
    className = isTouched ? `${className} is-touched` : className;
    className = isDirty ? `${className} is-dirty` : className;
    const { name: registeredName } = register(name, validate);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_hook_form_1.Controller, { name: registeredName, control: control, render: ({ field }) => (react_1.default.createElement(TextField_1.default, Object.assign({ id: id, error: !!error, helperText: error && error.message, className: className, onChange: onChange, label: name }, field, attributes))) })));
}
exports.ValidatedInput = ValidatedInput;
ValidatedInput.displayName = 'ValidatedInput';
/**
 * A utility wrapper over Reactstrap FormGroup + Label + ValidatedInput
 * that uses react-hook-form data to show error message and error/validated styles.
 * This component can be used with ValidatedForm
 *
 * @param ValidatedFieldProps
 * @returns JSX.Element
 */
function ValidatedField(_a) {
    var { children, name, id, disabled, className, check, row, col, label, labelClass, labelHidden, inputClass, inputTag, hidden } = _a, attributes = (0, tslib_1.__rest)(_a, ["children", "name", "id", "disabled", "className", "check", "row", "col", "label", "labelClass", "labelHidden", "inputClass", "inputTag", "hidden"]);
    const input = (react_1.default.createElement(ValidatedInput, Object.assign({ name: name, id: id, disabled: disabled, className: inputClass, hidden: hidden }, attributes), children));
    const inputRow = row ? react_1.default.createElement(Grid_1.default, Object.assign({ item: true }, col), input) : input;
    return (react_1.default.createElement(FormGroup_1.default, { row: row, className: className, hidden: hidden },
        check && inputRow,
        !check && inputRow));
}
exports.ValidatedField = ValidatedField;
ValidatedField.displayName = 'ValidatedField';
/**
 * A utility wrapper over Reactstrap FormGroup + Label + Input for blobs and images
 * that uses react-hook-form data to show error message and error/validated styles.
 * This component can be used with ValidatedForm
 *
 * @param ValidatedBlobFieldProps
 * @returns JSX.Element
 */
function ValidatedBlobField(_a) {
    var { name, register, setValue, error, isTouched, isDirty, validate, children, className, onChange, onBlur, id = name, disabled, row, col, label, labelClass, labelHidden, inputClass, inputTag, hidden, defaultValue, defaultContentType, isImage, imageStyle, imageClassName, clearBtn, openActionLabel, 
    // will be ignored as type will always be `file`
    type, check } = _a, attributes = (0, tslib_1.__rest)(_a, ["name", "register", "setValue", "error", "isTouched", "isDirty", "validate", "children", "className", "onChange", "onBlur", "id", "disabled", "row", "col", "label", "labelClass", "labelHidden", "inputClass", "inputTag", "hidden", "defaultValue", "defaultContentType", "isImage", "imageStyle", "imageClassName", "clearBtn", "openActionLabel", "type", "check"]);
    const [blob, setBlobData] = (0, react_2.useState)(defaultValue);
    const [blobContentType, setBlobContentType] = (0, react_2.useState)(defaultContentType);
    const contentTypeName = `${name}ContentType`;
    const setBlobValue = (data, contentType) => {
        setBlobData(data);
        setBlobContentType(contentType);
        setValue(contentTypeName, contentType, {
            shouldValidate: true,
            shouldDirty: true,
        });
        setValue(name, data, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };
    const clearBlob = () => {
        setBlobValue(null, null);
    };
    const renderFormGroup = inner => (react_1.default.createElement(FormGroup_1.default, { row: row, className: className, hidden: hidden }, inner));
    const inputRow = input => (row ? react_1.default.createElement(Grid_1.default, Object.assign({ item: true }, col), input) : input);
    if (!register) {
        return renderFormGroup(inputRow(react_1.default.createElement(TextField_1.default, Object.assign({ type: "file", id: id, name: name, className: className, onChange: onChange, onBlur: onBlur }, attributes))));
    }
    className = className || '';
    className = isTouched ? `${className} is-touched` : className;
    className = isDirty ? `${className} is-dirty` : className;
    (0, react_2.useEffect)(() => {
        register(name, validate);
        register(contentTypeName, validate);
    }, [register]);
    const input = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { id: `file_${name}_content_type`, name: contentTypeName, type: "hidden" }),
        react_1.default.createElement(TextField_1.default, Object.assign({ type: "file", id: id, name: name, 
            // valid={isTouched && !error}
            // invalid={!!error}
            className: className }, attributes))));
    const defaultClearBtn = (react_1.default.createElement(Button_1.default, { color: "warning", size: "small", onClick: clearBlob },
        react_1.default.createElement("strong", null, "\u00A0x\u00A0")));
    return renderFormGroup(react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("br", null),
        blob ? (react_1.default.createElement("div", { className: "mb-3 mt-2 jhi-validated-blob-field-item-container" },
            blobContentType ? (react_1.default.createElement("a", { onClick: (0, util_1.openFile)(blobContentType, blob), className: "jhi-validated-blob-field-item-anchor" }, isImage ? (react_1.default.createElement("img", { src: `data:${blobContentType};base64,${blob}`, style: imageStyle || { maxHeight: '100px' }, className: imageClassName })) : (openActionLabel || 'Open'))) : null,
            react_1.default.createElement("br", null),
            react_1.default.createElement(Grid_1.default, { container: true, className: "jhi-validated-blob-field-item-row" },
                react_1.default.createElement(Grid_1.default, { xs: 11, lg: 11, md: 11, className: "jhi-validated-blob-field-item-row-col" },
                    react_1.default.createElement("span", null,
                        blobContentType,
                        ", ",
                        (0, util_1.byteSize)(blob))),
                react_1.default.createElement(Grid_1.default, { xs: 1, lg: 1, md: 1, className: "jhi-validated-blob-field-item-row-col jhi-validated-blob-field-item-clear-btn" }, clearBtn ? clearBtn(clearBlob) : defaultClearBtn)))) : null,
        inputRow(input)));
}
exports.ValidatedBlobField = ValidatedBlobField;
ValidatedBlobField.displayName = 'ValidatedBlobField';
const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
function isEmail(value) {
    if ((0, util_1.isEmpty)(value))
        return true;
    return EMAIL_REGEXP.test(value);
}
exports.isEmail = isEmail;
//# sourceMappingURL=validated-form.js.map