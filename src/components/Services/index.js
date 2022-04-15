import React from 'react';
// import Icon1 from '../../images/image1.jpg';
// import Icon2 from '../../images/image2.jpg';
import Icon3 from '../../images/image3.jpg';
import Icon4 from '../../images/image4.jpg';
import Icon5 from '../../images/image5.jpg';
import Icon6 from '../../images/image6.jpg';
import Icon7 from '../../images/image7.jpg';
import Icon8 from '../../images/image8.jpg';
// import Icon10 from '../../images/image10.jpg';
import Icon11 from '../../images/image11.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon8} />
          <ServicesH2>Pruning</ServicesH2>
          <ServicesP>
            We can help you remove dead wood, reduce limbs for structural integrity, or help you train young trees for longevity.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Removals</ServicesH2>
          <ServicesP>
            Our team removes trees with safety as our primary concern.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Planting</ServicesH2>
          <ServicesP>
            We can help you plan your landscape and give environment specific species recommendations.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Mulching</ServicesH2>
          <ServicesP>
            Mulch helps trees access moisture in drought and can improve access to nutrients.     
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon7} />
          <ServicesH2>Pest and Disease Identification</ServicesH2>
          <ServicesP>
            We can help you identify your trees and hone in on any pest or diseases targeting your trees. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Plant Health Care Consultations</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon11} />
          <ServicesH2>Cabling and Bracing</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;