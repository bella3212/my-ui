import styled from 'styled-components'

export const GenericStyle=styled.div`
min-height: 100%;
min-width: 100%;
background: #282c34;
color: white;
`

export const Styles = styled.div`
padding: 1rem;

table {
  border-spacing: 0;
  border: 1px solid #ddd;
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #3e444f; 
    :last-child {
      border-right: 0;
    }
  }
}
`