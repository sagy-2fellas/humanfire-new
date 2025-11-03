import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';

// Initialize Builder
builder.init('803e7f63940b4b87b83b149f69d3950c');

export default function BuilderPage({ modelName = 'page' }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch content from Builder.io
    builder
      .get(modelName, {
        url: window.location.pathname,
      })
      .promise()
      .then((content) => {
        setContent(content);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Builder content:', error);
        setLoading(false);
      });
  }, [modelName]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Content Found</h1>
          <p className="text-gray-600">
            Create a new page in Builder.io for this URL: {window.location.pathname}
          </p>
        </div>
      </div>
    );
  }

  return <BuilderComponent model={modelName} content={content} />;
}
