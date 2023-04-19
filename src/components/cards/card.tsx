type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  tags: string[];
  badge?: string;
};

export const Card = (props: CardProps) => {
  const { title, description, icon, href, tags, badge } = props;

  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <a href={href}>
        <figure className='h-52 bg-gray-700'>
          <div className='flex items-center justify-center'>{icon}</div>
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            {title}
            <div className='badge badge-secondary'>{badge}</div>
          </h2>
          <p>{description}</p>
          <div className='card-actions justify-end'>
            {tags?.map((tag, index) => (
              <div key={index} className='badge badge-outline'>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};
