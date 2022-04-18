import styled from 'styled-components';
import Select from 'react-select';
export const Container = styled.div`
  // height: 100%;
  position: relative;
  padding-top: 2px;
  padding-bottom: 120px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  // z-index: 0;
  overflow: hidden;
  // background: linear-gradient(
  //   108deg,
  //   rgba(1, 147, 86, 1) 0%,
  //   rgba(10, 201, 122, 1) 100%
  // );
  background: #ACA9B2;
`;

export const FormWrap = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    margin-top: 50%;
    margin-bottom: 10%;
    height: 80%;
  }
`;
export const FormContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Success = styled.h1`
    text-align: center;
    font-size: 24px;
    margin-top: 80px;
    color: #fff;
`

export const FormContent = styled.div`
    background: #001429;
    max-width: 600px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    grid-template-colums: 1fr 1fr 1fr 1fr;
    margin: auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    @media screen and (max-width: 768px) {
        padding: 32px 32px;
        max-width: 400px;
    }
`

export const Form = styled.form`
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FormWrapper = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
      }
`

export const FormH1 = styled.h1`
    font-size: 1rem;
    text-align: start;
    max-width: 400px;
    width: 80%;
    margin-bottom: 1rem;
    color: #fff;
`

export const FormInputs = styled.div`
    margin-bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    color: #595959;
`

export const FormInputP = styled.p`
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
`

export const FormLabel = styled.label`
    display: inline-block;
    font-size: 0.8rem;
    margin-bottom: 6px;
    color: #fff;
`

export const FormInput = styled.input`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    border: none;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #595959;
        font-size: 12px;
    }
    :-ms-input-placeholder {
        color: #595959;
        font-size: 12px;
    }
`
export const FormSelect = styled(Select)`
    // display: block;
    // padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    border: none;
    color: #595959;
    font-size: 12px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #595959;
        font-size: 12px;
    }
    :-ms-input-placeholder {
        color: #595959;
        font-size: 12px;
    }
`
export const FormInfoLabel = styled.div`
    font-size: 1rem;
    text-align: start;
    max-width: 400px;
    width: 80%;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
`
export const FormInfo = styled.textarea`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 120px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    border: none;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #595959;
        font-size: 12px;
    }
    :-ms-input-placeholder {
        color: #595959;
        font-size: 12px;
    }
`

export const FormInputButton = styled.button`
    width: 80%;
    max-width: 400px;
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    background: linear-gradient(
    90deg,
    #00e801 0%,
    rgb(0, 236, 118) 100%
    );
    outline: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    &:hover {
        cursor: pointer;
        background: linear-gradient(
        90deg,
        rgb(136, 255, 39) 0%,
        rgb(165, 236, 0) 100%
        );
        transition: all 0.4s ease-out;
    }
`

export const FormDetails = styled.span`
    font-size: 0.8rem;
    margin-top: 10px;
    color: #fff;
    width: 80%;
    text-align: center;
`