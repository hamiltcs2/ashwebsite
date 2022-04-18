import React from 'react';
// import Icon1 from '../../images/image1.jpg';
// import Icon2 from '../../images/image2.jpg';
// import Icon3 from '../../images/image3.jpg';
import Icon4 from '../../images/image4.jpg';
import Icon5 from '../../images/image5.jpg';
import Icon6 from '../../images/image6.jpg';
import Icon7 from '../../images/image7.jpg';
// import Icon8 from '../../images/image8.jpg';
// import Icon10 from '../../images/image10.jpg';
// import Icon11 from '../../images/image11.jpg';
import Icon12 from '../../images/image12.jpg';
import Icon13 from '../../images/image13.jpg';
import Icon14 from '../../images/image14.jpg';
import Icon15 from '../../images/image15.jpg';
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
        <ServicesCard to ="/request" state={{services: 0}}>
          <ServicesIcon src={Icon12} />
          <ServicesH2>Pruning</ServicesH2>
          <ServicesP>
            We can help you remove dead wood, reduce limbs for structural integrity, or help you train young trees for longevity.
          </ServicesP>
        </ServicesCard>
        <ServicesCard to ="/request" state={{services: 1}}>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Removals</ServicesH2>
          <ServicesP>
            Our team removes trees with safety as our primary concern.
          </ServicesP>
        </ServicesCard>
        <ServicesCard to ="/request" state={{services: 2}}>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Planting</ServicesH2>
          <ServicesP>
            We can help you plan your landscape and give environment specific species recommendations.
          </ServicesP>
        </ServicesCard>
        <ServicesCard to ="/request" state={{services: 3}}>
          <ServicesIcon src={Icon14} />
          <ServicesH2>Mulching</ServicesH2>
          <ServicesP>
            Mulch helps trees access moisture in drought and can improve access to nutrients.     
          </ServicesP>
        </ServicesCard>
        <ServicesCard to ="/request" state={{services: 4}}>
          <ServicesIcon src={Icon7} />
          <ServicesH2>Pest and Disease Identification</ServicesH2>
          <ServicesP>
            We can help you identify your trees and hone in on any pest or diseases targeting your trees. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard to ="/request" state={{services: 5}}>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Plant Health Care Consultations</ServicesH2>
          <ServicesP>
          Our arborists provide you with information to make the best decisions about the preservation and safety of your trees.
          </ServicesP>
        </ServicesCard>
        <ServicesCard to ="/request" state={{services: 6}}>
          <ServicesIcon src={Icon13} />
          <ServicesH2>Cabling and Bracing</ServicesH2>
          <ServicesP>
          With the installation of dynamic bracing systems and cabling, we can help you mitigate risk around your property and maintain the structural integrity of your trees. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard to ="/request" state={{services: 7}}>
          <ServicesIcon src={Icon15} />
          <ServicesH2>Stump Grinding</ServicesH2>
          <ServicesP>
            After locating underground utilities, our team can grind your stumps in addition to tree removal or as a standalone service.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;