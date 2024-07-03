<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useCategoryStore } from '@/stores/categoryStore';
const { displayLoader, destroyLoader } = useGlobalLoader();


const store = useCategoryStore();
const onSubmit = async () => {
  try {
    displayLoader();

    await store.createCategory(form.value);
    router.push('/');
  } catch (error) {
    console.log(error);
  } finally {
    destroyLoader();
  }
};

</script>

