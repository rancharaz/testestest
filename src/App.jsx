
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios'



export const App = () => {

  const [primaryData, setPrimaryData] = useState()
  const headers = {
    'Content-Type': 'text/plain'
  };
  useEffect(() => {
    axios.get("http://localhost:8080/data", { headers })
      .then(function (response) {
        let allData = response.data;
        setPrimaryData(allData)
        console.log(allData)
      }).catch(function (error) {
        console.log(error.message)
      })

  }, [])

  const Contents = styled.div`
  background-color: red;
  width: 50%;
  display: flex;
  justify-content: center;
  `;

  const Container = styled.div`
  
  flex-direction: column;
  display: flex;
  justify-content: center;
  `;
  return <Container>
    <Contents><div>Meetings</div><div><select>

      <option value="fruit">Fruit</option>

      <option value="vegetable">Vegetable</option>

      <option value="meat">Meat</option>

    </select></div></Contents>
    <Contents>

      <div>
        {
          primaryData && primaryData.map((primaryData, index) => {
            return (
              <div key={index}>
                <table>
                  <tr>
                    <th>{primaryData.user_name}</th>


                  </tr>

                </table>
              </div>
            )
          })
        }
      </div>
    </Contents>
  </Container>;
};
