import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who am i',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Chào bạn! Mình là tên Hiếu, người đam mê công nghệ và thích chia sẻ kiến thức qua blog. 
        Xuất phát điểm của mình làm role IT Comtor nên thực ra mình không biết nhiều về tech.
        Sau hơn 2 năm làm việc trong ngành này mình quyết định dấn thân vào việc học về tech nhiều hơn
        cụ thể là về devops. Mình sẽ chia sẻ những gì mình học, kinh nghiệm , trải nghiệm lên Blog này.
        Nếu bạn thấy Blog này có ích hãy cho mình biết tại địa chỉ mail này nhé  <a href="mailto:hieunguyen.hari0701@gmail.com">hieunguyen.hari0701@gmail.com</a>
      </>
    ),
  },
  {
    title: 'Mình là WIBU',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mình lấy nhân vật anime làm hình nên thì phần nào các bạn cũng đoán được, <code>Mình là WIBU</code>
        Mình rất thích nhân vật zenitsu này, bình thường nhút nhát, sợ hãi nhưng tốt bụng, và lúc cần nghiêm túc 
        thì bao ngầu.Bản thân mình bước chân vào ngành IT cũng vậy cái gì cũng sợ , thứ mình duy nhất tự tin là tiếng Nhật
        giờ đây mình sẽ phải nghiêm túc mode học thêm nhiều thứ trong ngành này. Các bạn đồng hành cùng mình nhé
      </>
    ),
  },
];



function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6 ')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
