import React from 'react';

interface GenericDataDisplayProps {
  data: any;
  title?: string;
}

export default function GenericDataDisplay({ data, title }: GenericDataDisplayProps) {
  if (!data || typeof data !== 'object') {
    return <div className="text-gray-500">No object data available</div>;
  }

  const renderValue = (val: any): React.ReactNode => {
    if (val === null) return <span className="text-gray-400 italic">null</span>;
    if (val === undefined) return <span className="text-gray-400 italic">undefined</span>;
    
    if (typeof val === 'object') {
      if (Array.isArray(val)) {
        return (
          <div className="flex flex-col gap-1 mt-1">
            {val.map((item, idx) => (
              <div key={idx} className="pl-2 border-l-2 border-gray-200 dark:border-gray-700">
                {renderValue(item)}
              </div>
            ))}
          </div>
        );
      }
      // Recursive render for nested objects
      return <GenericDataDisplay data={val} />;
    }
    
    return <span className="font-mono text-sm">{String(val)}</span>;
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 my-2">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">{title}</h3>
        </div>
      )}
      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex flex-col sm:flex-row sm:justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize mb-1 sm:mb-0">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
            <div className="text-gray-900 dark:text-gray-100 text-right sm:max-w-[60%] break-words">
              {renderValue(value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
