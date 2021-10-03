import styled from 'styled-components'

const CardContainer = styled.div`
        height: 100%;
        background-image: ${props => `url(${props.bg_image})`};
        box-shadow: 5px 5px 20px #00000013;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 18px;
        position: relative;
        transition: all 0.5s ease;
        :hover{
            cursor: pointer;
            background-position: left bottom;
            transform: scale(1.0);
            transition: all 0.5s ease;
        }
        .card_text{
            position: absolute;
            top: ${props => props.top};
            left: ${props => props.left};
            bottom: ${props => props.bottom};
            right: ${props => props.right};
            font-size: 1.2rem;
            font-weight: 200;
        },
`
export default CardContainer