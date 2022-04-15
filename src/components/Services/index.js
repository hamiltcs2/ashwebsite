import React from 'react';
import Icon1 from '../../images/image4.jpg';
import Icon2 from '../../images/image2.jpg';
import Icon3 from '../../images/image3.jpg';
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
          <ServicesIcon src={Icon1} />
          <ServicesH2>Pruning</ServicesH2>
          <ServicesP>
            We can help you remove dead wood, reduce limbs for structural integrity, or help you train young trees for longevity.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Removals</ServicesH2>
          <ServicesP>
            Our team removes trees with safety as our primary concern.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
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
          <ServicesIcon src={Icon3} />
          <ServicesH2>Pest and Disease Identification</ServicesH2>
          <ServicesP>
            We can help you identify your trees and hone in on any pest or diseases targeting your trees. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Plant Health Care Consultations</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
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