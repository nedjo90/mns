public class Promo {
    private Student[] arrayOfStudent = new Student[30];
    private float meanOfPromo;

    public Student[] getArrayOfStudent() {
        return arrayOfStudent;
    }

    public void setArrayOfStudent(Student[] arrayOfStudent) {
        this.arrayOfStudent = arrayOfStudent;
    }

    public float getMeanOfPromo() {
        return meanOfPromo;
    }

    public void setMeanOfPromo(float meanOfPromo) {
        this.meanOfPromo = meanOfPromo;
    }

    public void addStudent(Student newStudent) {
        int i = 0;
        while (this.arrayOfStudent[i] != null)
        {
            i++;
        }
        if (i < 30)
        {
            arrayOfStudent[i] = newStudent;

        }
    }
    public float mean(){
        int i = 0;
        float ret = 0;
        while (this.arrayOfStudent[i] != null && i < 30){
            ret += arrayOfStudent[i].mean();
            i++;

        }
        ret /= i;

        return ret;
    }
}
