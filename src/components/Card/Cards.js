import React from 'react';
import styles from './Cards.module.css'
import { MDBRow , MDBCard, MDBCardBody, MDBCardTitle, MDBCol} from 'mdbreact';
import death from './death.png'
import sick from './sick.png'
import patient from './patient.png'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import CountUp from 'react-countup';





function Cards({data}) {
    
    if(data.loading)
    {
      return (
        <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      )
    }
    return (
        <div className={styles.b}>
        <MDBRow>
        
    
    <MDBCol className={styles.colo1}>
      <MDBCard className={styles.card2}>
        
        <MDBCardBody>
          
        <p>Infected</p>
          <MDBCardTitle>
          <CountUp className={styles.fone} start={0} end={data.datas.data.total.confirmed} duration={0.5}  />
          </MDBCardTitle>
          <img alt="sick" src={sick}></img>
         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol className={styles.colo2}>
      <MDBCard className={styles.card3}>
        
        <MDBCardBody>
          
        <p>Recovery</p>
          <MDBCardTitle>
          <CountUp className={styles.fone} start={0} end={data.datas.data.total.recovered} duration={0.5}  />
          
          </MDBCardTitle>
          <img alt="patient" src={patient}></img>
         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol className={styles.colo3}>
      <MDBCard className={styles.card1}>
        
        <MDBCardBody>
          
          <p>Death</p>
          <MDBCardTitle>
          <CountUp className={styles.fone} start={0} end={data.datas.data.total.deaths} duration={0.5}/>
          </MDBCardTitle>
          <img alt="death" src={death}></img>
         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        </MDBRow>
        <br></br><br/>
        <div className="container">
            <MDBTable striped bordered responsive>
      <MDBTableHead>
        <tr>
          <th><b>States</b></th>
          <th className="text-primary"><b>Infected</b></th>
          <th className="text-success"><b>Recovered</b></th>
          <th className="text-danger"><b>Death</b></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
        data.datas.data.statewise.map((res,index)=>(
          <tr key={index}>
            <td className={styles.fone}>{res.state}</td>
            <td className={styles.fone}>{res.confirmed}</td>
            <td className={styles.fone}>{res.recovered}</td>
            <td className={styles.fone}>{res.deaths}</td>
          </tr>
        ))
      }
      
      </MDBTableBody>
    </MDBTable>
    
        </div>
        </div>
    )
}

export default Cards
