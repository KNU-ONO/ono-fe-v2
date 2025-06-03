import { CombinationsButtonSection } from '@/features';
import { Button, COMBINATIONS_MOCK, Card, CardContent } from '@/shared';

export default function CombinationsPage() {
  return (
    <div className='container py-6'>
      <h1 className='mb-6 text-2xl font-bold'>골 조합 찾기</h1>
      <CombinationsButtonSection />

      <div className='mt-8'>
        <h2 className='mb-4 text-xl font-medium'>다이어트 조합</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {COMBINATIONS_MOCK.map((combo) => (
            <Card key={combo.id}>
              <CardContent className='p-4'>
                <h3 className='mb-2 font-medium'>{combo.title}</h3>
                <p className='mb-4 text-sm text-muted-foreground'>
                  {combo.description}
                </p>
                <div className='mt-4 flex space-x-2'>
                  {combo.items.map((item, index) => (
                    <div key={index} className='flex flex-col items-center'>
                      <div className='mb-1 flex h-16 w-16 items-center justify-center rounded-md bg-gray-100'>
                        <img
                          src={`/placeholder.svg?height=40&width=40`}
                          alt={item}
                          width={40}
                          height={40}
                        />
                      </div>
                      <span className='text-xs'>{item}</span>
                    </div>
                  ))}
                </div>
                <div className='mt-4 flex justify-end'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='border-red-600 text-red-600'
                  >
                    자세히 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
