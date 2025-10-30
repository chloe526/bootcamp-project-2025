    import React from 'react';
    import Image from 'next/image';
    import styles from './blogPreview.module.css';

    interface BlogPreviewProps {
        title: string; // done
        date: string; // done
        description: string; // done
        image: string; // done
        imageAlt: string; // done
        slug: string; // done
        id: string; // done
    }

    export default function BlogPreview(params : BlogPreviewProps) {
    return (

    
        <div className={styles.blogCard} id={params.id}>
            <Image
                src={params.image}
                alt={params.imageAlt}
                width={500}
                height={300}
                className={styles.blogImage}
            />
            
            <h3 className={styles.blogTitle}>{params.title}</h3>
            
            <div>
                <p className={styles.blogDescription}>{params.description}</p>
                <p className={styles.blogDate}>Posted on: {params.date}</p>
                
            </div>

            {/* <Link href={"${params.slug}.html"} className={styles.blogLink}>
                Read more
            </Link> */}
        </div>
    );
    }
