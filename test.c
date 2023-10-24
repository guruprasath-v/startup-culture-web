#include <stdio.h>

int main(void) {
	// your code goes here
	int num_1,num_2,i;
	num_1 = 2;
	num_2 = 3;
	for(i=1;i<=10;i++){
		printf("%d X %d = %d\t%d X %d = %d\n",num_1,i,num_1*i,num_2,i,num_2*i);
	}
	return 0;
}
