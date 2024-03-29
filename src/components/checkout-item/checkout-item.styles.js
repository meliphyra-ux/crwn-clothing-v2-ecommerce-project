import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 20%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 20.75%;
    text-align: center;
  }

  .quantity {
    display: flex;
    justify-content: center;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }
`;

export const RemoveButton = styled.div`
  width: 17%;
  padding-right: 17px;
  text-align: right;
  cursor: pointer;
`;
