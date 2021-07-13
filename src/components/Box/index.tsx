import styled from 'styled-components'

const Box = styled.section`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.sizes.borderRadius}px;

  padding: 16px;

  & + & {
    margin-top: 10px;
  }
`

export const Link = styled.span`
  font-size: 14px;
  color: #2e7bb4;
  text-decoration: none;
  font-weight: 800;
`
const TitleMargin = styled.span`
  font-weight: 400;
  margin-bottom: 20px;
`
export const Title = styled(TitleMargin)`
  font-size: 32px;
`
export const Subtitle = styled(TitleMargin)`
  font-size: 18px;
`
export const SmallTitle = styled.span`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #333;
`
export const Div = styled.hr`
  margin-top: 12px;
  margin-bottom: 8px;
  border-color: transparent;
  border-bottom-color: #ecf2fa;
`
export const Input = styled.input`
  width: 100%;
  background-color: #f4f4f4;
  color: #333;
  border: none;
  padding: 14px 16px;
  margin-bottom: 14px;
  border-radius: 10000px;

  ::placeholder {
    color: #333;
    opacity: 1;
  }
`
export const Button = styled.button`
  border: none;
  padding: 8px 12px;
  color: #fff;
  border-radius: 10000px;
  background-color: #6f92bb;
`

export default Box
